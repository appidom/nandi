
module.exports = (app, passport) => {
    app.get('/', (req, res, next) =>{
    res.render('index',{title:'Index || Rateme'});
    });
    app.get('/signup',(req, res) => {
           res.render('user/signup',{title: 'Signup || Rateme'}); 
    });
    
    app.post('/signup', passport.authenticate('local.signup',{
        
        successRedirect:'/',
        failureRedirect:'/signup',
        failureFlash:true
    }))
    app.get('/login',(req, res) => {
           res.render('user/login',{title: 'Login || Rateme'}); 
    });
}