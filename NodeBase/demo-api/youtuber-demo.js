const express=require('express')
const app=express()
const port=1234

app.use(express.json());

let youtubers = [
    { id: 1, channelTitle: "침착맨", sub: "243만명", videoNum: "6.9천개" },
    { id: 2, channelTitle: "침착맨 원본 박물관", sub: "38만명", videoNum: "1.3천개" },
    { id: 3, channelTitle: "침착맨 플러스", sub: "71.3만명", videoNum: "1.6천개" }
];

app.get('/youtubers', (req, res) => {
    res.json(youtubers);
});

app.get('/youtubers/:id',(req,res)=>{
    let youtuberId=parseInt(req.params.id);
    const youtuber=db.get(youtuberId);

    if(!youtuber){
        res.status(404).json({message:"유튜버 정보를 찾을 수 없습니다."});
    }else{
        res.json(youtuber);
    }
});

app.post('/youtubers',(req,res)=>{
    let newYoutuber=req.body;
    newYoutuber.id = youtubers.length + 1;
    youtubers.push(newYoutuber);
    res.json({
        message: `${newYoutuber.channelTitle}님, 유튜버 생활을 응원합니다!`
    });
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
