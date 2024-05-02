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
    const youtuber = youtubers.find(y => y.id == youtuberId);

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

app.delete('/youtubers/:id', (req, res) => {
    let youtuberId = parseInt(req.params.id);
    const youtuberIndex = youtubers.findIndex(y => y.id == youtuberId);
    if (youtuberIndex == -1) {
        res.status(404).json({ message: `요청하신 유튜버 정보를 찾을 수 없습니다.` });
    } else {
        const deletedYoutuber = youtubers.splice(youtuberIndex, 1)[0];
        res.json({
            message: `${deletedYoutuber.channelTitle}님, 아쉽지만 다음에 또 뵙겠습니다.`
        });
    }
});

app.delete('/youtubers',(req,res)=>{
    if(youtubers.length>0){
        youtubers=[];
        res.json({message:"전체 유튜버가 삭제되었습니다."});
    }else{
        res.status(404).json({message:"삭제할 유튜버가 없습니다."});
    }
})

app.put('/youtubers/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const youtuber=youtubers.find(y=>y.id==id);

    if(!youtuber){
        res.status(404).json({
            message: `요청하신 ${id}번은 없는 유튜버입니다.`
        });
    }else{
        const oldTitle=youtuber.channelTitle;
        const newTitle=req.body.channelTitle;
        youtuber.channelTitle=newTitle;
        res.json({
            message: `${oldTitle}님, 채널명이 ${newTitle}로 수정되었습니다.`
        })
    }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
