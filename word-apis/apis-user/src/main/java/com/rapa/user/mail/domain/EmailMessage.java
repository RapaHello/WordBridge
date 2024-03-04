package com.rapa.user.mail.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmailMessage {
    private String to;          // 수신자
    private String subject;     // 메일 제목

    public EmailMessage(Builder builder) {
        this.to = builder.to;
        this.subject = builder.subject;
    }

    public static class Builder {
        private String to;
        private String subject;

        public Builder setTo(String to) {
            this.to = to;
            return this;
        }

        public Builder setSubject(String subject) {
            this.subject = subject;
            return this;
        }

        public EmailMessage build() {
            return new EmailMessage(this);
        }
    }
}
