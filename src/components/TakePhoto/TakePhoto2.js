import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const getPermissions = async permissionTypes => {
    await Promise.all(permissionTypes.map( async type => await Permissions.askAsync(type)));
};

// export const selectFromCameraRoll = async () => {

// };

export const takePhoto = async () => {
    await getPermissions([Permissions.CAMERA, Permissions.CAMERA_ROLL]);
    const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8,
        base64: true,
        aspect: [16, 9]
    });

    if (result.cancelled) { return ''; }
    return result.uri;
};

