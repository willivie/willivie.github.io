package com.svse.controller;

import java.util.List;

import com.svse.mail.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.svse.entity.Userinfo;
import com.svse.service.UserService;

@Controller
@RequestMapping("user.do")
@Scope("prototype")
public class UserController {
	
	
	@Autowired
	private UserService  userService;
    @Autowired
    private MailService mail;
	
	//引导页面
	@RequestMapping(params="method=index")
	public String index()
	{
		return "index";
	}
	
	//全查询
	@RequestMapping(params="method=all")
	public String all(Model model)
	{
	    List<Userinfo> ar=this.userService.getAllUser();
	    model.addAttribute("myall", ar);
		return "user/all";
	}

    @RequestMapping(params="method=max")
    public String alls(Model model)
    {
        Userinfo ar=this.userService.getUserinfoByMaxId();
        model.addAttribute("myall", ar);
        return "user/all";
    }

	//跳转到增加页面
	@RequestMapping(params="method=myadd")
	public String myadd()
	{
		return "user/add";
	}
	//增加
	@RequestMapping(params="method=add")
	public String add(Userinfo user,Model model)
	{
		this.userService.addUser(user);
		return "redirect:/user.do?method=all";
	}
	//查询一个
	@RequestMapping(params="method=one")
	public String one(int uid,Model model)
	{
		Userinfo  user=this.userService.getOne(uid);
		model.addAttribute("myone", user);
		return "user/update";
	}
	//修改
	@RequestMapping(params="method=upp")
	public String upp(Userinfo user,Model model)
	{
		this.userService.updateUser(user);
		return "redirect:/user.do?method=all";
	}
	//删除
	@RequestMapping(params="method=del")
	public String del(int uid,Model model)
	{
		this.userService.delUser(uid);
		return "redirect:/user.do?method=all";
	}

	//发邮件
	@RequestMapping(params = "method=send")
	public String send(){
        mail.sendAttachmentsMail("932396823@qq.com", "给小恐龙","性感小恐龙在线发牌！","src/main/resources/static/image/041.jpg");
		return "user/success";
	}
	

}
