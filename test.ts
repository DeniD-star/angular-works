let isOpen : boolean;


class Person{
    // name;
    // age;
    constructor( public name: string, private age: number){
        // this.name = name; kogato promenlivata e public, tova, a su6to i declariraneto na name gore mojem da si go spestim, tui kato kato publi4no to avtomati4no 6te bude zaku4eno kum this(skopa)
        this.age = age;
    }

    getAge(){
        return this.age; //=> tuk 6te se vidi age v skopa na klasa za konkretnata instanziq, oba4e tui kato e privat, ako iskam da go izpolzvam za druga instanciq(ivan), nqma da moga
    }
}

const ivan = new Person('Ivan', 30);
//ivan.age===> ne(tui kato age e privat)
//no ako kaja na ivan da bude any, toest da go preobrazuvam,castna, to togava moga da mu dam drug age(t.e kazvame na ivan 4e moje da ima , da zaeme vsqka edna stoinost , moje da bude kakvoto i da e)
(ivan as any).age = 10;
ivan.getAge;
ivan.name;















































isOpen = true;

console.log(isOpen);
