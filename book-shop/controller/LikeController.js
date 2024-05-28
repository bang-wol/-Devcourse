const conn=require('../mariadb');
const {StatusCodes}=require('http-status-codes');

const addlikes=(req,res)=>{
    const {id}=req.params;
    const {user_id}=req.body;

    let sql=`INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)`
    let values=[user_id, id];

    conn.query(sql, values,
        (err, results) => {
            if(err){
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            res.status(StatusCodes.OK).json(results);
        })
};

const removeLikes = (req,res)=>{
    let {id}=req.params;
    const {user_id}=req.body;

    let sql=`DELETE FROM likes WHERE user_id=? AND liked_book_id=?`;
    let values=[user_id, id];

    conn.query(sql,values,
        (err, results) => {
            if(err){
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            res.status(StatusCodes.OK).json(results);
        })
};

module.exports={
    addlikes,
    removeLikes
};
