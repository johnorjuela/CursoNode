export const login = (req, res)=>{
    res.json({ok:"login",item:"perfecto"})
};

export const registrado = (req, res)=>{
    console.log(req.body);
    res.json({ok:"registrado"});
};

