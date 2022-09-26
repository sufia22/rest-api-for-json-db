const { readFileSync, writeFileSync } = require('fs');
const path = require('path');



/**
 * @desc get all users data
 * @name GET /api/v1/user
 * @access public
 */
const getAllUser = (req, res) => {

    // get all users from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    // send data
    res.status(200).json(users);
}


/**
 * @desc create a new user
 * @name POST /api/v1/user
 * @access public
 */
 const createUser = (req, res) => {

    // get all users from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    const { name, skill } = req.body;

    // validation
    if( !name || !skill ){
        res.status(400).json({
            message : "Name & Skill is required"
        });
    }else{
        users.push({
            id : Math.floor(Math.random() * 1000000),
            name : name,
            skill : skill
        });
    
        // write new data to json db
        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        res.status(201).json({
            message : "User created successfully"
        });
    }

}


/**
 * @desc Single user data
 * @name GET /api/v1/user/:id
 * @access public
 */
 const singleUser = (req, res) => {

    // get all users from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    // get id
    const singleuser = users.find( data => data.id == req.params.id );

    if(singleuser){
        res.status(200).json(singleuser);
    }else{
        res.status(400).json({
            message : "User data not found"
        });
    }
}

/**
 * @desc delete user data
 * @name DELETE /api/v1/user/:id
 * @access public
 */
 const deleteUser = (req, res) => {

    // get all users from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    if( users.some( data => data.id == req.params.id )){

        const data = users.filter( data => data.id != req.params.id );
        // write new data to json db
        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(data));
        res.status(200).json({
            message : "User data deleted successfully"
        });

    }else{
        res.status(404).json({
            message : "User data not found"
        });
    }

}

/**
 * @desc update user data
 * @name PUT or PATCH /api/v1/user
 * @access public
 */
 const updateUser = (req, res) => {

    // get all users from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    if(users.some( data => data.id == req.params.id )){

        users[users.findIndex( data => data.id == req.params.id )] = {
            ...users[users.findIndex( data => data.id == req.params.id )],
            ...req.body
        }

        // write updated data to json db
        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        res.status(200).json({
            message : "User data updated successfully"
        });

    }else{
        res.status(404).json({
            message : "User data not found"
        });
    }
}




// export controllers
module.exports = {
    getAllUser, createUser, singleUser, deleteUser, updateUser
}