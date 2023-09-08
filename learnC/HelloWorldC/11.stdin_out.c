#include <stdio.h>

int main() {
  int c;
  printf("Enter a value:");
  c = getchar();

  printf("\nYou entered: ");

  putchar(c);

  printf("\n");
  printf("c=%d\n", c);

//  char str[100];
//
//  printf( "Enter a value :");
//  gets( str );
//
//  printf( "\nYou entered: ");
//  puts( str );

  return 0;
}
