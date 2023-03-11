const User = require('../../models/User');

class UserDbService {
    static async addUserToDb(data){
        const result = await User.find({USER_EMAIL: data.email});
        let user = {
            USER_EMAIL : data.email,
            USER_NAME : data.USER_NAME,
        };
        if(data.TAGS)
            user = {...user, TAGS: data.TAGS};
        if(data.LINKS)
            user = {...user, LINKS: data.LINKS};
        if(data.PROFILE_PIC_URL)
            user = {...user, PROFILE_PIC_URL: data.PROFILE_PIC_URL};
        if(data.BRANCH)
            user = {...user, BRANCH: data.BRANCH}
        if(data.CURRENT_YEAR)
            user = {...user, CURRENT_YEAR: data.CURRENT_YEAR};
        if(data.DESCRIPTION)
            user = {...user, DESCRIPTION: data.DESCRIPTION};
        if(data.COLLEGE)
            user = {...user, COLLEGE: data.COLLEGE};
        if(data.city)
            user = {...user, city: data.city};
        if(data.location)
            user = {...user, location: data.location};
        if(result.length > 0){
            await User.updateOne(
                { USER_EMAIL : data.email},
                {$set: user}
            );
        }else{
            user = await new User({...user});
            const savedNote = await user.save();
        }
    }


   
}

module.exports = { UserDbService };