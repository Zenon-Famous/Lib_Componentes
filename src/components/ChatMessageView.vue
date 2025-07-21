<template>
  <div class="chatbox" :class="{ right: from === 'agent' }">
    <span class="chat-pic material-symbols-sharp">
      <component v-if="accountCircleIcon" :is="accountCircleIcon" />
      <template v-else>{{ AccountCircle }}</template>
    </span>
    <div class="chat-balloon" :style="balloonStyle">
      <span class="chat-name">{{ clientName }}</span>

      <span v-if="message.Type === 'Text'" v-html="handleText(message.Message)"></span>

      <span v-if="message.Type === 'Attachment'" class="attachment">

        <img
          v-if="message.MimeType?.startsWith('image/')"
          class="img-fluid img"
          :src="message.URL"
        />

        <div
          v-if="message.MimeType?.startsWith('audio/') || message?.MediaType === 'Audio'"
        >
          <AudioPlayer :src="message" :from="from" />
          <a
            class="mb-0 pb-0 text-decoration-none d-flex align-items-center"
            :class="from === 'agent' ? 'color-agent' : 'color-client'"
            :href="message.URL"
            download
          >
            <component
              v-if="downloadIcon"
              :is="downloadIcon"
              class="me-2 icon-rotate"
              :class="from === 'agent' ? 'color-agent' : 'color-client'"
            />
            <span class="text-decoration-underline">Download</span>
          </a>
        </div>

        <div
          v-if="message.MimeType?.startsWith('video/') && message.MediaType !== 'Audio'"
        >
          <video class="ratio ratio-16x9" controls>
            <source :src="message.URL" />
            {{ message.URL }}
          </video>
        </div>

        <a
          v-else-if="
            !message.MimeType?.startsWith('audio/') &&
            message.MediaType !== 'Audio'
          "
          class="d-flex align-items-center"
          :href="message.URL"
          target="_blank"
          :class="from === 'agent' ? 'color-agent' : 'color-client'"
        >
          <span
            class="material-symbols-rounded icon-rotate mb-0"
            :class="from === 'agent' ? 'color-agent' : 'color-client'"
          >
            attachment
          </span>
          {{ message.Filename }}
        </a>

        {{ message.Caption }}
      </span>

      <span class="chat-timestamp">{{ formattedTimestamp }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import AudioPlayer from "./AudioPlayer.vue";

const props = defineProps({
  AccountCircle: { type: String, default: "Account circle" },

  accountCircleIcon: { type: [Object, Function], default: null },
  downloadIcon: { type: [Object, Function], default: null },

  message: { type: Object, required: true },
  timestampFormatter: { type: Function },

  clientStyle: {
    type: Object,
    default: () => ({
      backgroundColor: "#d2d6de",
      color: "#444",
      border: "1px solid #d2d6de",
    }),
  },
  agentStyle: {
    type: Object,
    default: () => ({
      backgroundColor: "green",
      color: "#dadada",
      border: "1px solid #007bff",
    }),
  },
});

const from = computed(() =>
  props.message.Direction === "Inbound" ? "client" : "agent"
);

const clientName = computed(() => {
  const participant = props.message.Participant;
  return participant?.NickName || participant?.Name || "Usuário";
});

const formattedTimestamp = computed(() => {
  const raw = props.message.ReceivedTime;
  if (!raw) return "";
  if (props.timestampFormatter) return props.timestampFormatter(raw);

  const date = new Date(raw);
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
});

const balloonStyle = computed(() =>
  from.value === "agent" ? props.agentStyle : props.clientStyle
);

function handleText(msg) {
  if (!msg || typeof msg !== "string") return msg;

  const patterns = {
    quote: {
      pattern: /> ([^\n]*)/g,
      replacement:
        "<span style='background: rgba(0,0,0,0.3); padding-left: 6px; padding-block: 4px'><span style='border-left: 3px solid #bebdbe; padding-inline: 4px; font-size: 14px; font-style: italic; color: #ededed'>$1</span></span> ",
    },
    code: {
      pattern: /`([^`]*)`/g,
      replacement:
        "<span style='background: rgba(0,0,0,0.3); color: #ededed; font-family: Courier New, Courier, monospace; padding-inline: 4px;'>$1</span>",
    },
    bold: {
      pattern: /\*(.*?)\*/g,
      replacement: "<b>$1</b>",
    },
    list: {
      pattern: /- (.+?)(?=\s-|$|\n)/g,
      replacement: "<li>$1</li>",
    },
    line: {
      pattern: /~(.*?)~/g,
      replacement: "<span style='text-decoration:line-through'>$1</span>",
    },
    italic: {
      pattern: /_(.*?)_/g,
      replacement: "<i>$1</i>",
    },
  };

  for (const key in patterns) {
    msg = msg.replace(patterns[key].pattern, patterns[key].replacement);
  }

  return msg;
}
</script>

<style lang="scss" scoped>
.chatbox {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.chatbox.right {
  flex-direction: row-reverse;
}

.chat-balloon {
  word-break: break-word;
  border-radius: 0.3rem;
  padding: 5px 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 10em;
  margin-bottom: 1em;
  margin-right: 2em;
  max-width: 25rem;
}

.chat-name {
  font-size: 0.6rem;
  margin-left: -5px;
  margin-top: -5px;
}

.chat-timestamp {
  font-size: 0.6rem;
  margin-right: -5px;
  margin-bottom: -5px;
  text-align: end;
}

.attachment img {
  width: 80%;
  border-radius: 4px;
}
.attachment audio,
.attachment video {
  width: 100%;
}
.attachment a {
  width: 100%;
  display: block;
  overflow: hidden;
  height: 2.2em;
  margin-top: 8px;
  font-size: 12px;
  word-break: break-all;
}
.icon-rotate {
  transform: rotate(90deg);
  font-size: 16px;
}
</style>
