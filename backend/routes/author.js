const express=require ('express');
const router=express.Router();
const Author=require('../models/author')


//config upload 
const multer=require ('multer')
const mystorage=multer.diskStorage({
    destination:'./uploads',
    filename:(req,file,redirect)=>{
        let date=Date.now();
        let fl=date+'.'+file.mimetype.split('/')[1]
        redirect(null,fl)
        filename=fl;
    }
})

const upload=multer({storage:mystorage})
//end of upload config



router.post('/ajout',upload.any('image'), (req,res)=>{
    let data=req.body

    let author=new Author(data)
    author.image=filename

    author.save()
    .then(
        (saved)=>{
            filename='';
            res.status(200).send(saved)
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )

})


router.get('/all', (req,res)=>{
    Author.find({})
    .then(
        (saved)=>{
            res.status(200).send(saved)
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )

})


router.get('/getbyid/:id', (req,res)=>{
    let id=req.params.id

    Author.findById({_id:id})
    .then(
        (saved)=>{
            res.status(200).send(saved)
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )

})



router.delete('/delete/:id', (req,res)=>{
    let id=req.params.id
    Author.findByIdAndDelete({_id:id})
    .then(
        (saved)=>{
            res.status(200).send(saved)
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )

})

router.put('/update/:id',upload.any('image') ,(req,res)=>{
    let id=req.params.id;
    let data=req.body;


    if (filename.length>0){
        data.image=filename;
    }

    Author.findByIdAndUpdate({_id:id}, data)

    .then(
        (saved)=>{
            res.status(200).send(saved)
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
})


module.exports=router;




