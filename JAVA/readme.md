# Simple Java Syntax Guide with Code Examples

---

## 1. Inheritance (`extends`)

```java
class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking...");
    }
}

// Usage
Dog d = new Dog();
d.eat();  // inherited method
d.bark(); // own method
````

---

## 2. Interfaces (`implements`)

```java
interface Animal {
    void eat();
}

class Dog implements Animal {
    public void eat() {
        System.out.println("Dog eats food");
    }
}

// Usage
Animal dog = new Dog();
dog.eat();
```

---

## 3. Method Overriding

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

// Usage
Animal a = new Dog();
a.sound(); // calls overridden method in Dog
```

---

## 4. Abstract Classes

```java
abstract class Animal {
    abstract void sound();
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

// Usage
Animal a = new Dog();
a.sound();
```

---

## 5. Constructors

```java
class Person {
    String name;

    Person(String name) {
        this.name = name;
    }
}

// Usage
Person p = new Person("Alice");
System.out.println(p.name);
```

---

## 6. Method Overloading

```java
class Calculator {
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}

// Usage
Calculator c = new Calculator();
c.add(5, 10);    // 15
c.add(1, 2, 3);  // 6
```

---

## 7. Packages and Import

```java
// In file utils/Helper.java
package utils;

public class Helper {
    public static void greet() {
        System.out.println("Hello!");
    }
}

// Usage in another file
import utils.Helper;

Helper.greet();
```

---

## 8. Inner Classes

```java
class Outer {
    class Inner {
        void msg() {
            System.out.println("Hello from Inner class");
        }
    }
}

// Usage
Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
inner.msg();
```

---

## 9. Access Modifiers

Java has four main access modifiers:

* `public` — accessible from anywhere
* `protected` — accessible within the package and subclasses
* `default` (no modifier) — accessible within the same package only
* `private` — accessible only within the class itself

### Example:

```java
public class Person {
    public String name;         // accessible everywhere
    protected int age;          // accessible in package and subclasses
    String address;             // default access (package only)
    private String password;    // accessible only within Person class

    private void showPassword() {
        System.out.println("Password: " + password);
    }
}
```

---

## 10. `static` Keyword

`static` members belong to the class rather than any particular object.

### 10.1 Static Variables

* Shared by all objects of the class.

```java
class Counter {
    static int count = 0;

    Counter() {
        count++;
    }
}

// Usage
Counter c1 = new Counter();
Counter c2 = new Counter();
System.out.println(Counter.count);  // Output: 2
```

### 10.2 Static Methods

* Can be called without creating an object.
* Cannot access non-static members directly.

```java
class Utility {
    static void greet() {
        System.out.println("Hello, World!");
    }
}

// Usage
Utility.greet();
```

---

## 11. Array of Objects

### a) Array of Objects with values in code

```java
Student[] students = {
    new Student("Alice", 20),
    new Student("Bob", 22)
};
for (Student s : students) s.display();
```

### b) Array of Objects with user input (syntax only)

```java
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
Student[] students = new Student[n];
for (int i = 0; i < n; i++) {
    String name = sc.nextLine();
    int age = sc.nextInt();
    students[i] = new Student(name, age);
}
```

---

## 12. `final` Keyword

```java
final class Constants {
    final double PI = 3.14;
}

// Usage
Constants c = new Constants();
System.out.println(c.PI);  // cannot change PI because it's final
```

---

## 13. `this` Keyword

```java
class Person {
    String name;
    Person(String name) {
        this.name = name;  // refers to instance variable
    }
}
```

---

## 14. `super` Keyword

### 14.1 Accessing Superclass Method

```java
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    void sound() {
        super.sound();  // calls Animal's sound()
        System.out.println("Dog barks");
    }
}
```

### 14.2 Accessing Superclass Variable

```java
class Animal {
    String name = "Animal";
}

class Dog extends Animal {
    String name = "Dog";

    void printNames() {
        System.out.println(name);          // prints Dog
        System.out.println(super.name);    // prints Animal
    }
}
```

---

## 15. Exception Handling (try-catch)

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
}
```

---

## Summary Table

| Topic              | Syntax Example                                        | Description                                 |
| ------------------ | ----------------------------------------------------- | ------------------------------------------- |
| Inheritance        | `class Dog extends Animal {}`                         | Class inherits another class                |
| Interface          | `class Dog implements Animal {}`                      | Implements interface methods                |
| Method Overriding  | `@Override void sound() {}`                           | Subclass replaces superclass method         |
| Abstract Class     | `abstract class Animal { abstract void sound(); }`    | Abstract classes have abstract methods      |
| Constructor        | `Person(String name) { this.name = name; }`           | Initialize object variables                 |
| Method Overloading | `int add(int a, int b), int add(int a, int b, int c)` | Same method name, different parameters      |
| Packages           | `package utils;` + `import utils.Helper;`             | Organize classes and import                 |
| Inner Class        | `Outer.Inner inner = outer.new Inner();`              | Class inside another class, create object   |
| Access Modifiers   | `public`, `private`, `protected`, `default`           | Control visibility                          |
| Static             | `static int count; static void method()`              | Class-level variables and methods           |
| Array of Objects   | `Student[] arr = {...}` or with input loop            | Store multiple objects                      |
| Final              | `final int x = 10; final class C {}`                  | Constant variables or non-inheritable class |
| This               | `this.name = name;`                                   | Refers to current object                    |
| Super (methods)    | `super.method();`                                     | Calls parent class method                   |
| Super (variables)  | `super.variable`                                      | Access parent class variable                |
| Exception Handling | `try { } catch (Exception e) {}`                      | Handle runtime errors                       |

---


