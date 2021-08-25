// JUST NOTES - NO RELATION TO THE REST OF THIS APP
// JUST NOTES - NO RELATION TO THE REST OF THIS APP
// JUST NOTES - NO RELATION TO THE REST OF THIS APP
// JUST NOTES - NO RELATION TO THE REST OF THIS APP
// JUST NOTES - NO RELATION TO THE REST OF THIS APP

class Student {
    // constructor to instantiate with properties and values
    constructor (fname) {
        this.fname = fname;
    }
    sayName() {
        console.log(this.fname);
        // 'this' takes the name of the instance, so justin in 'justin.sayName()
    }
    
    // You know this is a static methond on the class because you can use dot notation on the class, and pass in the instance - greet(justin)
    static greet(instance) {
        console.log(instance.fname);
    }
}

let justin = new Student('Justin');

justin.sayName();


class EFAStudent extends Student {
    constructor(fname, badge) {
        super(fname)  // must call super on inherited constructor
        this.badge = badge
    }
    sayBadge() {
        console.log(this.badge);
    }
}

let dustin = new EFAStudent('Dustin', 'Red');
dustin.sayName();
dustin.sayBadge();


