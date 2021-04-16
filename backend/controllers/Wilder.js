//? On récupère le schéma du document dont on a besoin, "require"  fonctionne comme les "import" en REACT
const wilderModel = require ("../models/Wilder");

const oldMethods =  {
    oldCreate: (req, res) => {
        wilderModel.init().then(() => {
            console.log(req.body);
            
            const wilder = new wilderModel(req.body);

            wilder
            .save()
            .then( (result) => {
                res.json({success: true, result: result});
            })

            .catch((err) =>{
                console.log(req.err);

                res.json({
                    success: false, result: err
                })
            })
        });
    },

    oldRead: (req, res) => {
        wilderModel.init().then(() => {

            wilderModel
            .find()
            .then( (result) => {
                console.log(req.path);
                //! ATTENTION: Ici c'est res.json et non result.json (l'objet que renvoie la promesse). res = response donc renvoies la réponse en json, à l'intérieur on y trouvera le résultat 
                res.json({success: true, result: result});
            })

            .catch((err) =>{
                res.json({
                    success: false, result: err
                })
            })
        });
    },
    
    oldUpdate: (req, res) => {
        wilderModel.init().then(()=>{

            //? wilderModel : Contiendra le schéma nommé wilder en provenance du fichier model

            //? wilder avec le body de la requête en paramètre : Contiendra le schéma "wilder" trouvé avec les données reçues de la requête
            //? wilder sans le body de la requête en paramètre : Contiendra un nouveau schéma "wilder", mais vide 
            const wilder = wilderModel(req.body);
            
            //! On met à jour le modèle avec les informations reçues de la requête (wilder) ET NON le wilder directement !
            //? Image du fonctionnement: Pour changer le contenu d'une bouteille, il nous faut la bouteille (wilderModel) et un nouveau liquide (wilder), on ne peut pas changer le liquide directement sans bouteille

            wilderModel
            .updateOne({_id: req.body._id},  wilder)

            .then(() =>{
                console.log(wilder);
                res.json({success: true, result: wilder})
            })

            .catch((err) =>{
                res.json({success: false, result: err})
            })
            

        })
    },
     
    oldDelete: (req, res) => {
        wilderModel.init().then(() => {

            const deletedWilder = new wilderModel(req.body);
            console.log(deletedWilder);

            wilderModel
            .findOneAndDelete({_id: req.body._id})
            
            .then((result) => {
                res.json({success: true, deletedWilder: result})
            })
            
          
        });
    },
}

const newMethods =  {
    newCreate: async (req, res) => {            
        try{
            //? Toutes fonctions executées dans un environnement asynchrone devront être prefixées par l'opérateur "await"            
            await wilderModel.init();    

            //? On remplit un schéma wilder avec les données reçues du client, #écriture
            const newWilder =  new wilderModel(req.body)

            //? On enregistre le nouveau document en base de donnée dans sa collextion
            const result = await newWilder.save();

            //? Retourne un message de succès
            res.json({success: true, result: result})
            
        }
        
        catch(error){
            console.log(error);
            
            res.json({success: false, result:error})
        }
    },

    newRead: async (req, res) => {
        
        try {
            await wilderModel.init();

            //? Pas besoin de créer un nouveau schéma avec les données reçues du client, car on en reçoit pas, #lecture
            const result = await wilderModel.find();
            
            res.json({success: true, result: result})
        }

        catch (error) {
            console.log(error);

            res.json({success: false, result: error})
            
        }
    },
    
    newUpdate: async (req, res) => {
        wilderModel.init().then(() => {

        })

    },
     
    newDelete: async (req, res) => {

    },
}

//? Fonctionne comme les export en REACT
module.exports = {oldMethods, newMethods};