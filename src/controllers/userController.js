const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const readUsers = () => {
	const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
	return users
} 
const saveUsers = (users) => fs.writeFileSync(usersFilePath, JSON.stringify(users,null,3));


module.exports = {
	login: (req, res) => {
		return res.render('login')
	},
    processLogin:(req,res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
           let body = true
           
            req.session.userLogin ={
                name: req.body.name.trim(),
                tema: req.body.tema,
                email: req.body.email,
                edad: req.body.edad
            }
            if(req.body.recordarme){
                res.cookie('Tema-AMII', req.session.userLogin, {maxAge: 100*60*2})
            }
            return res.render('perfil', {
                old:req.body,
                body
            })
        }else{
            let body= false
            return res.render('login',{
                errors:errors.mapped(),
                old:req.body,
                body
            })
        }
    },
    profile: (req, res) => {
        const session = req.session.userLogin
		return res.render('perfil',{
            session
        })
	},
    logout: (req,res) => {
        req.session.destroy();
        res.cookie("Tema-AMII", null, {maxAge : -1})
        return res.redirect("/")
    },
};