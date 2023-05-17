import { validationResult } from "express-validator";
export const login = (req, res)=>{
    res.json({ok:"login",item:"perfecto"})
};

export const registrado = (req, res)=>{
    console.log(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})

    }
    res.json({ok:"registrado"});
};

