package com.todo.restservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static long idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "admin", "Learn React", new Date(), false));
        todos.add(new Todo(++idCounter, "admin", "Exercise", new Date(), true));
        todos.add(new Todo(++idCounter, "admin", "Learn Microservices", new Date(), false));
        todos.add(new Todo(++idCounter, "admin", "Learn about Music", new Date(), false));
        todos.add(new Todo(++idCounter, "admin", "Cook delicious food", new Date(), false));
        todos.add(new Todo(++idCounter, "admin", "Shopping", new Date(), true));
        todos.add(new Todo(++idCounter, "admin", "Take Bath", new Date(), true));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo save(Todo todo) {
        if (todo.getId() == -1 || todo.getId() == 0) {
            todo.setId((++idCounter));
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if (todo == null) return null;
        if (todos.remove(todo)) return todo;
        return todo;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }
}
