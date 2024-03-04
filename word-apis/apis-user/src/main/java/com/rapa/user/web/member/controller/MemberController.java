package com.rapa.user.web.member.controller;

import com.rapa.user.web.member.domain.JoinForm;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MemberController {
    @GetMapping("/join")
    public String join (Model model) {
        model.addAttribute("joinForm", new JoinForm());

        return "member/join";
    }

    @PostMapping("/join")
    public String checkJoin(@Valid @ModelAttribute JoinForm joinForm, BindingResult bindingResult) {
        return "";
    }
}
