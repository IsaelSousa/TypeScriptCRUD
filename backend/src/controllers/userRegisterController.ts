import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';
import { User } from '../database/models/User';
import { ObjectID } from 'mongodb';
import bcrypt from 'bcrypt';

class userRegisterController {
  /**
   * List Users
   */
  async index( req: Request, res: Response ){
    const userRegister = getMongoRepository(User);

    const users = await userRegister.find({ select: [ "id", "name", "email", "password" ] });

    return res.json({users});
  };
  /**
   * Register Users
   */
  async register( req: Request, res: Response ){
    const userRegister = getMongoRepository(User);
    const {name, email, password} = req.body;
    
    const userExists = await userRegister.findOne({ where: { email } });

    if (userExists){
      return res.sendStatus(409);
    }

    const userCreated =  new User( name, email, password );
    await userRegister.save(userCreated);

    res.json({userCreated});
  };
  /**
   * Delete Users
   */
  async delete( req: Request, res: Response ){
    const userRegister = getMongoRepository(User);

    const user = await userRegister.delete(req.params.id);

    return res.json(user);
  };
  /**
   * Updated Email
   */
  async update( req: Request, res: Response ){
    const userRegister = getMongoRepository(User);
    const emailupdated = req.body;

    const updated = userRegister.updateOne(
      { _id: new ObjectID(req.params.id) },
      { $set: { email: { emailupdated } } },
      { upsert: true }
    )

    return res.json({ updated });
  }
  /**
   * Login
   */
  async login( req: Request, res: Response ){
    const userRegister = getMongoRepository(User);
    const { email, password } = req.body;

    const user = await userRegister.findOne({ where: { email } })

    if(!user) {
      return res.json(" Email Incorrect! ")
    }

    const passHash = await bcrypt.compare(password, user.password)

    if (!passHash) {
      return res.json(" Password Incorrect! ")
    }

    return res.sendStatus(200);

  }
}

export default new userRegisterController();