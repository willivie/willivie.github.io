package com.svse.service;

import java.util.List;

import com.svse.entity.Userinfo;

public interface UserService
{

	public void addUser(Userinfo user);

	public List<Userinfo> getAllUser();

	public void updateUser(Userinfo user);

	public Userinfo getOne(int uid);

	public void delUser(int uid);

	Userinfo getUserinfoByMaxId();
}
