// 判断对象是否为空对象
export const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}" && obj.constructor === Object;
};