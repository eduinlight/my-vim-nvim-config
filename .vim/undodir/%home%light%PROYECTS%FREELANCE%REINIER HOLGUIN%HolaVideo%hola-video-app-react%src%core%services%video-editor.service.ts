Vim�UnDo� ���Tw�cڜ�w�QN-�&�z��n�k���}0   �                                   ^�1    _�                             ����                                                                                                                                                                                                                                                                                                                                                             ^�"     �         �       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^�#     �         �       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^�#     �   �   �          D        await this.createVideoFromScreen(history.endScreen, quality)�   �   �                videosPath.push(�   �   �              if (history.endScreen) {�   �   �           �   �   �              }�   �   �          L      videosPath.push(await this.convertVideo(historyVideo.video, quality));�   �   �          0    for (const historyVideo of history.videos) {�   �   �           �   �   �              }�   �   �                );�   �   �          F        await this.createVideoFromScreen(history.startScreen, quality)�   �   �                videosPath.push(�   �   �              if (history.startScreen) {�   �   �           �   �   �          $    const videosPath: string[] = [];�   �   �            ): Promise<string> {�   �   �              hasWaterMark = false�   �   �              quality: FFmpegQuality,�   �   �              history: IHistory,�   �   �            async generateHistoryVideo(�   �   �           �   �   �            }�   �   �              return output;�   �   �           �   �   �          #    FilesService.unlinkFile(video);�   �   �           �   �   �          D    await FFmpegService.addVideoWaterMark(video, watermark, output);�   �   �           �      �          ;    const output = `${FilesService.generateTmpFile()}.mp4`;�   ~   �            ): Promise<string> {�   }                 watermark: string�   |   ~              video: string,�   {   }            private async addWaterMark(�   z   |           �   y   {            }�   x   z              return output;�   w   y           �   v   x          #    FilesService.unlinkFile(video);�   u   w           �   t   v          =    await FFmpegService.addSilentAudioToVideo(video, output);�   s   u           �   r   t          ;    const output = `${FilesService.generateTmpFile()}.mp4`;�   q   s          E  private async addSilentBackground(video: string): Promise<string> {�   p   r           �   o   q            }�   n   p              return output;�   m   o           �   l   n          #    FilesService.unlinkFile(video);�   k   m           �   j   l          C    await FFmpegService.addAudioToVideo(video, audio, output, 0.2);�   i   k           �   h   j          ;    const output = `${FilesService.generateTmpFile()}.mp4`;�   g   i          N  private async addBackground(video: string, audio: string): Promise<string> {�   f   h           �   e   g            }�   d   f              return videos[0];�   c   e           �   b   d              }�   a   c                return output;�   `   b           �   _   a          '      FilesService.unlinkFiles(videos);�   ^   `           �   ]   _          5      await FFmpegService.joinVideos(videos, output);�   \   ^          =      const output = `${FilesService.generateTmpFile()}.mp4`;�   [   ]              if (videos.length > 1) {�   Z   \          ?  private async joinVideos(videos: string[]): Promise<string> {�   Y   [           �   X   Z            }�   W   Y          C    return await this.generateHistoryVideo(history, quality, true);�   V   X           �   U   W              };�   T   V                }�   S   U                  preset: "medium"�   R   T                  code: "libx264",�   Q   S                  bitrate: "1M",�   P   R                video: {�   O   Q          =      size: { width: history.width, height: history.height },�   N   P                fps: 30,�   M   O          $    const quality: FFmpegQuality = {�   L   N          =  async generateHistory(history: IHistory): Promise<string> {�   K   M           �   J   L            }�   I   K          D    return await this.generateHistoryVideo(history, quality, false);�   H   J           �   G   I              };�   F   H                }�   E   G                  preset: "ultrafast"�   D   F                  code: "libx264",�   C   E                  bitrate: "500K",�   B   D                video: {�   A   C                size: { width, height },�   @   B                fps: 20,�   ?   A          $    const quality: FFmpegQuality = {�   >   @           �   =   ?          &    const { width, height } = history;�   <   >          D  async generateHistoryPreview(history: IHistory): Promise<string> {�   ;   =           �   :   <            }�   9   ;              return response;�   8   :           �   7   9              );�   6   8                options�   5   7                output,�   4   6                video.path,�   3   5          6    const response = await FFmpegService.convertVideo(�   2   4           �   1   3          $    FilesService.unlinkFile(output);�   0   2           �   /   1              );�   .   0          %      `history_video_${video.id}.mp4`�   -   /                Config.files.tmpPath,�   ,   .              const output = path.join(�   +   -          N  async convertVideo(video: IMedia, options: FFmpegQuality): Promise<string> {�   *   ,           �   )   +            }�   (   *              return response;�   '   )           �   &   (          #    FilesService.unlinkFile(image);�   %   '           �   $   &              );�   #   %                option�   "   $                output,�   !   #                image,�       "          >    const response = await FFmpegService.createVideoFromImage(�      !           �                 $    FilesService.unlinkFile(output);�                 �                    );�                -      `history_screen_video_${screen.id}.mp4`�                      Config.files.tmpPath,�                    const output = path.join(�                 �                    });�                      text: screen.text�                "      textColor: screen.textColor,�                .      backgroundColor: screen.backgroundColor,�                !      height: option.size.height,�                      width: option.size.width,�                <    const image = await ImageEditorService.screenToTmpJpeg({�                  ): Promise<string> {�                    option: FFmpegQuality�                    screen: IScreen,�                  async createVideoFromScreen(�                class VideoEditorServiceClass {�                 �   
             /import FFprobeService from "./ffprobe_service";�   	             import fs from "fs";�      
          -import FFmpegService from "./ffmpeg.service";�      	          1import { FFmpegQuality } from "./ffmpeg.service";�                >import FilesService from "../../files/services/files.service";�                ?import { IMedia } from "../../data_manager/models/media.model";�                Aimport { IScreen } from "../../data_manager/models/screen.model";�                import path from "path";�                %import Config from "../../../config";�                8import ImageEditorService from "./image_editor.service";�                 Cimport { IHistory } from "../../data_manager/models/history.model";5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^�#     �         �       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^�#    �         �       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^�-     �                 Aimport {IHistory} from '../../data_manager/models/history.model';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^�-     �                 8import ImageEditorService from './image_editor.service';5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             ^�-     �                 %import Config from '../../../config';5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             ^�-     �                 import path from 'path';5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             ^�.     �                 ?import {IScreen} from '../../data_manager/models/screen.model';5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                             ^�.     �                 =import {IMedia} from '../../data_manager/models/media.model';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^�.     �                 >import FilesService from '../../files/services/files.service';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^�/     �                 /import {FFmpegQuality} from './ffmpeg.service';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^�/     �                 -import FFmpegService from './ffmpeg.service';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^�/     �                 import fs from 'fs';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^�/     �                 /import FFprobeService from './ffprobe_service';5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             ^�0    �                  5��