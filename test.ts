let isOpen: boolean;

enum UserRole{
    Admin,//avtomati4no vzima 0
    Client,//avtomati4no vzima 1

}

type UserData = {//tipovete po nikakuv na4in ne se razli4avat ot interfeisovete no mogat da sa polezni pri nqkoi operacii, koito inerfeisite nemogat
    newName: string;
    newAge: number;
}

//izpolzvam interface kogato nqkakvi danni iskam da gi izpolzvam mnogokratno, ili puk kogato sa mnogo i prosto e po-udobno da si gi iznesa na otdelno v edin interface
//izpolzva I otpred za da go razli4i Interface ot prostite tipove v tsc.Razlikata mejdu tqh e 4e konkretni operacii ne sa vuzmojni 4rez interfaisite a s tipovete da
interface IUserNewData{
    newName: string;
    newAge: number;//tuk to4ka i zapetaq e zaduljitelna
}

class Person {
  // name;
  // age;
  constructor(
    public name: string,
    private age: number,
    protected gender: string,
   public role: UserRole//tuk kazvam imame private promenliva role, koqto e ot tipa enum UserRole
  ) {
    // this.name = name; kogato promenlivata e public, tova, a su6to i declariraneto na name gore mojem da si go spestim, tui kato kato publi4no to avtomati4no 6te bude zaku4eno kum this(skopa)
    this.age = age;
    this.gender = gender; //protected e kogato imame nasledqvane, kato privat , otnovo e nevidima za vun6niq svqt,
    //no 6te e vidima za ne6tata koito nasledqvame
    
  }

  getAge() {
    return void this.age; //=> tuk 6te se vidi age v skopa na klasa za konkretnata instanziq, oba4e tui kato e privat, ako iskam da go izpolzvam za druga instanciq(ivan), nqma da moga
    //void ozna4ava 4e tova koeto se pravi ot dqsnata strana se obrabotva, no resultata ot nego se ignorira i tova koeto se vru6ta e undefined
  }

  getGender(): void {//ako deklarirame tazi funkciq void, to i resultata ot neq trqbva da e void
    return  void this.gender;
  }

  setData(newData: {newName: string, newAge: number}){
      this.age = newData.newAge;
      this.name = newData.newName;
  }
}

const ivan = new Person("Ivan", 30, "m", UserRole.Client);
//ivan.age===> ne(tui kato age e privat)
//no ako kaja na ivan da bude any, toest da go preobrazuvam,castna, to togava moga da mu dam drug age(t.e kazvame na ivan 4e moje da ima , da zaeme vsqka edna stoinost , moje da bude kakvoto i da e)
(ivan as any).age = 10;
ivan.getAge;
ivan.name;

isOpen = true;

console.log(isOpen);
ivan.setData({newName: 'Peter', newAge: 35})//kogato podavame metod na druga instanciq klas, podavame i promenlivite , ne samo tqhnata stoinost


function identity<T>(arg: T): T{
    return arg;
}

//const value = 1;//ako tuk e const , to togava function identity trqbva da priema samo stoinostta edno
let value = 1;// to togava argumenta na identity moje da e razli4no ot 1, no zaduljitelno trqbva da e 4islo, spored kakto o4akva generic function identity(otgore)


const test = identity(value)

const newData: IUserNewData= {newAge: 40, newName: 'Stefan'}

let test2 = UserRole.Client;

if(ivan.role === test2){
    console.log('something');
    
}
