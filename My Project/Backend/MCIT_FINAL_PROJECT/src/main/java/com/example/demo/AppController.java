package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.demo.models.User;

import com.example.demo.AppRepo;

@RestController
public class AppController {
	
    @Autowired
    AppRepo appRepo;
    
	@RequestMapping(method=RequestMethod.POST, value="/signup")
	public void createUser(@RequestBody User user) {
		appRepo.save(user);
	}


	@RequestMapping(method=RequestMethod.POST, value="/login")
	public String login(@RequestBody User user) {
	User u=appRepo.findByEmail(user.getEmail());
	if(u!=null) {
	if(appRepo.findByEmail(user.getEmail()).getEmail().equals(user.getEmail())) {
	return u.getEmail();
	}
	}else {
	return "";
	}

	return "";
	}

	@RequestMapping(method=RequestMethod.GET, value="/profile")
	public User profile(@RequestParam String email) {
	return appRepo.findByEmail(email);
	}

	@RequestMapping(method=RequestMethod.POST, value="/firstname")
	public void firstname(@RequestBody User user ) {
	User u=appRepo.findByEmail(user.getEmail());
	u.setFirstName(user.getFirstName());
	appRepo.save(u);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/lastname")
	public void lastname(@RequestBody User user ) {
	User u=appRepo.findByEmail(user.getEmail());
	u.setLastName(user.getLastName());
	appRepo.save(u);
	}
	@RequestMapping(method=RequestMethod.POST, value="/email")
	public void email(@RequestBody User user ) {
	User u=appRepo.findByEmail(user.getEmail());
	u.setEmail(user.getEmail());
	appRepo.save(u);
	
	}
	@RequestMapping(method=RequestMethod.POST, value="/gender")
	public void gender(@RequestBody User user ) {
	User u=appRepo.findByEmail(user.getEmail());
	u.setGender(user.getGender());
	appRepo.save(u);

	}
	@RequestMapping(method=RequestMethod.POST, value="/dob")
	public void dob(@RequestBody User user ) {
	User u=appRepo.findByEmail(user.getEmail());
	u.setDateOfbirth(user.getDateOfbirth());
	appRepo.save(u);

	}

	@RequestMapping(method=RequestMethod.POST, value="/education")
	public void education(@RequestBody User user ) {
	User u=appRepo.findByEmail(user.getEmail());
	u.setEducation(user.getEducation());
	appRepo.save(u);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/experiance")
	public void experience(@RequestBody User user ) {
	User u=appRepo.findByEmail(user.getEmail());
	u.setExperiance(user.getExperiance());
	appRepo.save(u);

	}
	@RequestMapping(method=RequestMethod.POST, value="/aboutme")
	public void aboutMe(@RequestBody User user ) {
	User u=appRepo.findByEmail(user.getEmail());
	u.setAboutme(user.getAboutme());
	appRepo.save(u);

	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
	return new WebMvcConfigurer() {
	@Override
	public void addCorsMappings(CorsRegistry registry) {
	registry.addMapping("/*")
	.allowedOrigins("*")
	.allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD");
	}
	};
	

}
	}
