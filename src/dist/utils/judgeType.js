// 判断对象是否为空对象
export const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}" && obj.constructor === Object;
};

// 判断是否有属性prop,有的话，值是否是数组
export const isArrayProperty = (obj, prop) => {
    // 判断对象是否有指定的属性
    if (obj.hasOwnProperty(prop)) {
        // 判断属性值是否是数组
        return Array.isArray(obj[prop]);
    }
    return false;
}