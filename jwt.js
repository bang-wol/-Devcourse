const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const users = [
    {
        id: 1,
        email: "user@example.com",
        password: "password123", // 실제 애플리케이션에서는 해시로 저장되어야 함
    },
];

// 로그인 API
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // 사용자 인증
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // JWT 토큰 생성
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.PRIVATE_KEY,
            { expiresIn: '30m' } // 토큰 만료 시간 설정
        );

        res.cookie("token",token,{
            httpOnly: true
        })

        res.status(200).json({
            token:token,
            messege: `${loginUser.name}님 로그인 되었습니다.`
        })

    } else {
        res.status(403).json({
            message: "이메일 또는 비밀번호가 틀렸습니다."
        })
    }
});
