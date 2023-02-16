#include <stdio.h>

/**
 * 结构体
 *
 * */


struct turtle {
  char* name;
  char* species;
  int age;
};

// t是 struct 结构的指针，调用函数时传入的是指针
//对于 struct 变量名，使用点运算符（.）获取属性；对于 struct 变量指针，使用箭头运算符（->）获取属性
void happy(struct turtle* t) {
//  (*t).age = (*t).age + 1;
  t->age = t->age + 1;
}

int main() {
  struct book {
    char title[500];
    char author[100];
    float value;
  };



  struct book b1 = {"Harry Potter", "J. K. Rowling", 10.0};

  struct book b2;

  char str[500] = "Harry Potter";
  b2.title[0] = 'a';
  b2.author[0] = 'b';
  b2.value = 3.10;

  printf("%s\n", b1.title);

  // typedef命令可以为struct结构指定一个别名，这样用起来更简洁
  typedef struct cell_phone {
    int cell_no;
    float minutes_of_charge;
  } phone;

  phone p = {5551234, 5};

  printf("%d\n", p.cell_no);

  // struct 指针
  struct turtle myTurtle = {"MyTurtle", "sea turtle", 99};
  happy(&myTurtle);
  printf("Age is %i\n", myTurtle.age); // 输出 99

  return 0;
}
