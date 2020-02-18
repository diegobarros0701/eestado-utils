export default {
    mutation: (object) => {
        const data = object[Object.keys(object)[0]].returning[0];
        delete data.__typename;
        return data;
    },
    queryOne: (object) => {
        const data = object[Object.keys(object)[0]][0];
        delete data.__typename;
        return data;
    },
    query: (object) => {
        return object[Object.keys(object)[0]];
    },
    delete: (object) => {
        return object[Object.keys(object)].affected_rows;
    },
};