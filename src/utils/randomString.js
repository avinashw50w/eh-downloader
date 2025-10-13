const randomString = () => {
    const getRandomString = (len = 8) => {
        const str =
            "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randStr = "";
        for (let i = 0; i < len; ++i) {
            randStr += str[Math.floor(Math.random() * str.length)];
        }
        return randStr;
    };

    return {
        getRandomString,
    };
};

export default randomString();
