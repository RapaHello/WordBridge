package com.rapa.user.web.member.controller;

import com.rapa.user.web.member.domain.MemberForm;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MemberController {
    @GetMapping("/join")
    public String join (Model model) {
        model.addAttribute("memberForm", new MemberForm());

        return "member/join";
    }
}
