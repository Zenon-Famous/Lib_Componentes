import { ref } from "vue";

const hasMicPermission = ref(false);

function checkMicrophonePermissionAndAvailability() {
  if ("mediaDevices" in navigator) {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function () {
        hasMicPermission.value = true;
      })
      .catch(function (error) {
        if (
          error.name === "NotAllowedError" ||
          error.name === "PermissionDeniedError"
        ) {
          hasMicPermission.value = false;
        } else if (
          error.name === "NotFoundError" ||
          error.name === "DevicesNotFoundError"
        ) {
          hasMicPermission.value = false;
        } else {
          hasMicPermission.value = false;
        }
      });

    navigator.permissions
      .query({ name: "microphone" })
      .then(function (permissionStatus) {
        permissionStatus.onchange = function () {
          permissionStatus.state == "denied"
            ? (hasMicPermission.value = false)
            : (hasMicPermission.value = true);
        };
      });
  } else {
    console.log("O navegador não suporta a API mediaDevices");
    hasMicPermission.value = false;
  }
}

export default function useMicPermission() {
  return {
    hasMicPermission,
    checkMicrophonePermissionAndAvailability,
  };
}
