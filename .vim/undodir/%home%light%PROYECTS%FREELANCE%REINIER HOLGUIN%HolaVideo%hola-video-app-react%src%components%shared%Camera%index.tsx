Vim�UnDo� �_o�0�Z�VcA�
���$�œiϘ����   �       w                           _��   
 _�                     �        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���     �   �   �       
             <Button               transparent   )            onPress={toggleIsCameraFront}   .            style={styles.rotateCameraButton}>               <Icon   "              style={styles.white}   C              name={isCameraFront ? 'camera-front' : 'camera-rear'}   "              type="MaterialIcons"               />             </Button>5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���     �   �   �   �                {takeAImageBtn}5�_�                    g   P    ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���     �   f   j   �      P  const showSeconds = !isImage && <Text style={styles.seconds}>{seconds}</Text>;5�_�                    i       ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���     �   i   t   �    �   i   j   �    5�_�                    h        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���     �   g   i   �       5�_�                    h        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���     �   �   �       B     const renderReverseBtn =              <Button               transparent   )            onPress={toggleIsCameraFront}   .            style={styles.rotateCameraButton}>               <Icon   "              style={styles.white}   C              name={isCameraFront ? 'camera-front' : 'camera-rear'}   "              type="MaterialIcons"               />             </Button>       
  return (   N    <Modal animationType="fade" visible={open} presentationStyle="fullScreen">         <RNCamera           ref={ref => {             //@ts-ignore             camera.current = ref;   
        }}           style={styles.preview}           type={             isCameraFront   +            ? RNCamera.Constants.Type.front   *            : RNCamera.Constants.Type.back   	        }           flashMode={             isFlashActive   -            ? RNCamera.Constants.FlashMode.on   .            : RNCamera.Constants.FlashMode.off   	        }   1        // cameraViewDimensions={{width, height}}   )        androidCameraPermissionOptions={{   ,          title: 'Permission to use camera',   @          message: 'We need your permission to use your camera',             buttonPositive: 'Ok',   #          buttonNegative: 'Cancel',   
        }}   .        androidRecordAudioPermissionOptions={{   5          title: 'Permission to use audio recording',   ?          message: 'We need your permission to use your audio',             buttonPositive: 'Ok',   #          buttonNegative: 'Cancel',   
        }}         />   3      <ClappyColumn justifyContent="space-between">   +        <View style={styles.headerButtons}>   <          <Button transparent onPress={toggleIsFlashActive}>               <Icon   :              name={isFlashActive ? 'flash' : 'flash-off'}   "              style={styles.white}   +              type="MaterialCommunityIcons"               />             </Button>             {showSeconds}   0          <Button transparent onPress={onClose}>               <Icon                 name="close"   "              style={styles.white}   +              type="MaterialCommunityIcons"               />             </Button>           </View>   *        <View style={styles.foterButtons}>             {recodrBtn}       {takeAImageBtn}       {renderReverseBtn}�   h   �   �    �   g   i   �       5�_�                    h        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���     �   g   i   �       5�_�      	              h        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���    �   g   i   �       5�_�      
           	   i       ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���     �   h   j   �        const renderReverseBtn =5�_�   	              
   i       ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���    �   h   j   �        const renderReverseBtn =()5�_�   
                 h        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���     �   g   i   �       5�_�                    h        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���     �   h   j            const renderReverseBtn =(�   g   i   �       5�_�                    h        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^���    �   g   i   �       5�_�                    i       ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^��     �   h   k   �        const renderReverseBtn = (5�_�                    j       ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^��      �   i   k   �          isRecording ? 5�_�                    t       ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^��$    �   s   u   �          </Button>5�_�                    v        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^��+     �   u   v            const renderReverseBtn = (       !isRecording ?        <Button         transparent   #      onPress={toggleIsCameraFront}   (      style={styles.rotateCameraButton}>         <Icon           style={styles.white}   =        name={isCameraFront ? 'camera-front' : 'camera-rear'}           type="MaterialIcons"         />   </Button>: <></>�   h   v   �    �   u   w   �       5�_�                    w        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^��+     �   v   x   �       5�_�                    w        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    ^��,     �   v   x   �       5�_�                    w        ����                                                                                                                                                                                                                                                                                                                                                             ^��,    �   v   x   �       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�     �         �       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�    �         �       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�     �         �       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�   	 �         �       5�_�                    w        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    _��     �   v   x   �       5�_�                     w        ����                                                                                                                                                                                                                                                                                                                            �   
       �   
       V   
    _��   
 �   v   x   �       5��