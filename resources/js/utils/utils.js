/**
 * [将nodeList对象数组转化为数组]
 * @param  {[type]} nodes [nodeList对象数组]
 * @return {[type]}       [转换生成的数组]
 */
function convertArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0);
    } catch (ex) {
    	array = [];
    	for (var i = nodes.length - 1; i >= 0; i--) {
    		array.push(nodes[i]);
    	}
    }
    return array;
}
