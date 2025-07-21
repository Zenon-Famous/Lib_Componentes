import { describe, it, expect, vi } from 'vitest';
import { nextTick } from 'vue';
import useMicPermission from '@/composables/useMicPermission';

describe('useMicPermission', () => {
  it('deve inicializar com hasMicPermission como false', () => {
    const { hasMicPermission } = useMicPermission();
    expect(hasMicPermission.value).toBe(false);
  });

  it('deve alterar hasMicPermission para true ao permitir acesso ao microfone', async () => {
    const mockGetUserMedia = vi.fn().mockResolvedValue({});
    Object.defineProperty(navigator, 'mediaDevices', {
      writable: true,
      value: { getUserMedia: mockGetUserMedia },
    });

    const { hasMicPermission, checkMicrophonePermissionAndAvailability } = useMicPermission();
    await checkMicrophonePermissionAndAvailability();
    await nextTick();

    expect(mockGetUserMedia).toHaveBeenCalled();
    expect(hasMicPermission.value).toBe(true);
  });

  it('deve alterar hasMicPermission para false ao negar acesso ao microfone', async () => {
    const mockGetUserMedia = vi.fn().mockRejectedValue(new Error('Permission denied'));
    Object.defineProperty(navigator, 'mediaDevices', {
      writable: true,
      value: { getUserMedia: mockGetUserMedia },
    });

    const { hasMicPermission, checkMicrophonePermissionAndAvailability } = useMicPermission();
    await checkMicrophonePermissionAndAvailability();
    await nextTick();

    expect(mockGetUserMedia).toHaveBeenCalled();
    expect(hasMicPermission.value).toBe(false); 
  });
});
