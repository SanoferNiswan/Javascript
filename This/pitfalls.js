// losing context

const obj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};

setTimeout(obj.getValue, 1000); // 'this' will not refer to obj
// Output: undefined
setTimeout(obj.getValue.bind(obj), 1000); // Correctly binds 'this'


// Using this in Event Handlers:
const obj1 = {
    value: 42,
    getValue: function() {
        console.log(this.value);
    }
};

document.getElementById('myButton').addEventListener('click', obj.getValue); // 'this' is the button
