let myMap = new Map();

myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

for (const e of myMap.keys()) {
    console.log(`Ключ — ${e}, значение — ${myMap.get(e)}`);
}
