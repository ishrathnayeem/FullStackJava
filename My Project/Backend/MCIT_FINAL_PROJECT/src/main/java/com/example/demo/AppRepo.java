package com.example.demo;
import org.springframework.data.mongodb.repository.*;

import com.example.demo.models.User;

public interface AppRepo  extends MongoRepository<User,String>{
  public User findByEmail(String email);
}
