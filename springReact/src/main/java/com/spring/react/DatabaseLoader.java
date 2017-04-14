package com.spring.react;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
	
	private final EmployeeRepository repository;
	
	@Autowired
	public DatabaseLoader(EmployeeRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... arg0) throws Exception {
		System.out.println("Class ========================> this is DatabaseLoader Class");
		this.repository.save(new Employee("Frodo", "Baggins", "ring bearer"));
	}

}
