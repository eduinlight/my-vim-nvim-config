Vim�UnDo� d5��JecӐo��~z�P�L���V��|5��d                    ;       ;   ;   ;    _Y��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             _Y�     �                 �             �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                  l5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �             �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                   user: IUser,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �              5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                   file: UploadedFile,5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �             5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                   active = false5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                   activedwd = false5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                ;import {IUser} from "../../data_manager/models/user.model";   0import {UploadedFile} from "express-fileupload";       %export interface UploadAvatarParams {       user: IUser       file: UploadedFile,       active: boolean5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 }5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �   	              export async 5�_�                    
   ?    ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �   	              Aexport async function uploadAvatar({user, file, active = false}) 5�_�                    
   U    ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �   	              Uexport async function uploadAvatar({user, file, active = false}: UploadAvatarParams) 5�_�                    
   ]    ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �   
              �   
          �   	              ]export async function uploadAvatar({user, file, active = false}: UploadAvatarParams):Promise<5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �   
              kkk5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �   
               lj5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �             �             5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �      
          5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �   	         
   eexport async function uploadAvatar({user, file, active = false}: UploadAvatarParams):Promise<IMedia>{       "    return this.uploadFileGeneric(         user,         file,         "avatar",         MimesType.isImage,   !      Config.files.imagesMaxSize,         active       );5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �      
          5�_�                       &    ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �               )}: UploadAvatarParams): Promise<IMedia> {5�_�                       &    ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                   MimesType.isImage,5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �             5�_�      !                  
    ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                   Config.files.imagesMaxSize,5�_�       "           !      
    ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �             5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �               =import {IMedia} from "../../data_manager/models/media.model";5�_�   #   %           $           ����                                                                                                                                                                                                                                                                                                                                                             _Y��    �                5�_�   $   &           %      	    ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                  return this.uploadFileGeneric(5�_�   %   '           &      	    ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 return .uploadFileGeneric(5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 return uploadFileGeneric(5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �             �                 return uploadFileGeneric(5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 return uploadFileGeneric()(5�_�   )   +           *          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 return uploadFileGeneric)(5�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 return uploadFileGeneric(5�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 return uploadFileGeneric({}5�_�   ,   .           -          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                   "avatar",5�_�   -   /           .          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                   type "avatar",5�_�   .   0           /          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                   MimesType.isImage,5�_�   /   1           0          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                   Config.files.imagesMaxSize,5�_�   0   2           1           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                5�_�   1   3           2           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                5�_�   2   4           3           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                5�_�   3   5           4          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                 );5�_�   4   6           5           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                5�_�   5   7           6           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �               9import {uploadFileGeneric} from "../core/generic-upload";       %export interface UploadAvatarParams {     user: IUser;     file: UploadedFile;     active: boolean;   }       $export async function uploadAvatar({     user,     file,     active = false   )}: UploadAvatarParams): Promise<IMedia> {     return uploadFileGeneric({   	    user,   	    file,       type:  "avatar",5�_�   6   8           7           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                5�_�   7   9           8           ����                                                                                                                                                                                                                                                                                                                                                             _Y��    �                5�_�   8   :           9          ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �   
              active: boolean;5�_�   9   ;           :           ����                                                                                                                                                                                                                                                                                                                                                             _Y��     �                5�_�   :               ;           ����                                                                                                                                                                                                                                                                                                                                                             _Y��    �                5��