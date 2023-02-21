//
// Created by heyungao on 2023/2/20.
//
#include <stdio.h>

int main() {
  FILE *fp = NULL;

  fp = fopen("/Volumes/heyg/dev/Javascriptnote/learnC/HelloWorldC/test2.txt", "w");
  fprintf(fp, "This is testing for fprintf...\n");
  fputs("This is testing for fputs...\n", fp);
  fclose(fp);
}