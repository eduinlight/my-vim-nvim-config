Vim�UnDo� �����̵�a�`1�$)�V��+�E�9Y��M                                      _,�Z    _�                             ����                                                                                                                                                                                                                                                                                                                                                  V        _,ֳ     �                bool isDigit(const char &c) {     return '0' <= c  && c <= '9';   }       bool isAlpha(const char &c) {   :  return ('A' <= c && c <= 'Z') || ('a' <= c && c <= 'z');   }       "bool isUnderscore(const char &c) {     return c == '_';   }       %bool variableName(std::string name) {      const int len = name.length();     for(int i=0;i<len;i++){       const char c = name[i];       if(i==0 && isDigit(c)){         return false;       }   7    if(!(isDigit(c) || isAlpha(c) || isUnderscore(c))){         return false;       }     }     return true;   }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,ֹ     �               �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,ֻ    �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,ּ    �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,��     �                5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _,��     �                #include <bits/stdc++.h>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _,��     �               char next(const char c)5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                  V        _,��     �         	        �             �               char next(const char &c)5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                  V        _,��     �         	        return c=='z'5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                  V        _,��     �         	        return c=='z' ? 'a'5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                  V        _,��     �         	       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,��     �         	       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _,�     �         	        return c=='z' ? 'a' : c++;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _,�     �         	        return c=='z' ? 'a' : c+;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _,�     �         	        return c=='z' ? 'a' : c;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,�
     �         	       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,�
     �         	       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,�
     �         	       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,�
    �         	       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,�     �         	       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,�    �         	       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _,�     �      	   	       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _,�&     �      	   	        std::string sol = ""5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _,�'     �         	        std::string sol = "";5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                  V        _,�*     �      
          5�_�                    	   &    ����                                                                                                                                                                                                                                                                                                                                                  V        _,�>     �               &  const int len = inputString.length()5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                  V        _,�K     �   
                �   
          �   	              for(int i=0; i< len; i++)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _,�T     �   
                sol += next()5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _,�X    �   
                sol += next(inputString[i])5�_�                             ����                                                                                                                                                                                                                                                                                                                                                V       _,�Z     �      	         Lstd::string alphabeticShift(std::string inputString) { std::string sol = "";5��