import keyTokenModel from "../models/keyToken.model.js";

class KeyTokenService {
    static createKeyToken = async (userId, publicKey, privateKey) => {
        try {
            const tokens = await keyTokenModel.create({
                user: userId,
                publicKey: publicKey,
                privateKey: privateKey
            });

            return tokens ? tokens.publicKey : null;
        } catch (error) {
            return
        }
    }
}

export default KeyTokenService;