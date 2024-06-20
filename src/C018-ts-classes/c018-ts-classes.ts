//Verbose form to define a class in TypeScript as follows
export class Company {
  public readonly name: string; //public is the default behavior if you don't specify it, it's not necessary
  private readonly employees: Employee[] = []; //readonly means you can't replace the array, but you can still add/remove values to it
  //If you want to create an immutable array, then you would set as follows:
  //private employees: readonly Employee[] = [];
  //Note that readonly is the for the array and not the property
  protected readonly registryNo: string;

  constructor(name: string, registryNo: string) {
    this.name = name;
    this.registryNo = registryNo;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  showEmployees(): void {
    for (const employee of this.employees) {
      console.log(employee);
    }
  }
}

//Shorter form to define a class in TypeScript as follows
export class Employee {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}

const company1 = new Company('Your Business', '13370043');
const employee1 = new Employee('John', 'Smith');
const employee2 = new Employee('Jane', 'Doe');
const employee3 = new Employee('Alice', 'Liddel');

company1.addEmployee(employee1);
company1.addEmployee(employee2);
company1.addEmployee(employee3);

console.log(company1);
company1.showEmployees();

export {};
