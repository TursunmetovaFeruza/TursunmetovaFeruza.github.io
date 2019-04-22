const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();
 var port = process.env.PORT || 3000
const textScheme = new Schema({data: String}, {versionKey: false});
const text = mongoose.model("texts", textScheme);
 
app.use(express.static('public'))

//app.use(express.static(__dirname + "/public"));
 
mongoose.connect("mongodb://localhost:27017/text", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(port, function(){
        console.log("Сервер ожидает подключения...");
    });
});
  
app.get("/api/texts", function(req, res){
        
    text.find({}, function(err, texts){
 
        if(err) return console.log(err);
        res.send(texts)
    });
});
 
app.get("/api/texts/:id", function(req, res){
         
    const id = req.params.id;
    text.findOne({_id: id}, function(err, text){
          
        if(err) return console.log(err);
        res.send(text);
    });
});
    
app.post("/api/texts", jsonParser, function (req, res) {
        
    if(!req.body) return res.sendStatus(400);
        
    const data = req.body.data;
    console.log(data);
    const texts = new text({data: data});
        
    texts.save(function(err){
        if(err) return console.log(err);
        res.send(texts);
    });
});
     
app.delete("/api/texts/:id", function(req, res){
         
    const id = req.params.id;
    text.findByIdAndDelete(id, function(err, texts){
                
        if(err) return console.log(err);
        res.send(texts);
    });
});
    
app.put("/api/texts", jsonParser, function(req, res){
         
    if(!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const data = req.body.data;
    const newtext = {data: data};
     
    text.findOneAndUpdate({_id: id}, newtext, {new: true}, function(err, texts){
        if(err) return console.log(err); 
        res.send(texts);
    });
});