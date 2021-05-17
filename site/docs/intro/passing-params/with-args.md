---
title: "Passing params with args"
sub_link: "passing-params/with-args"
meta_title: "Passing parameters to your programs as args - Core Concepts"
meta_description: "Passing the parameters as args requires that you create and expose your programs as simple command-line applications."
visibility: public
status: published
tags:
  - tutorials
  - concepts
  - quick-start
sidebar: "intro"
---

Passing the parameters as args requires that you create and expose your programs as simple command-line applications.

Creating command-line applications is a powerful way for exposing your work, it forces users to think about how to structure and organize programs.
It provides documentation for the expected inputs and performs checks that other users can benefit from when interacting with a program. 

## Passing params to a simple program

Your program can be written in any language, the only requirements to use this method for passing configurations (inputs/outputs), it that you need to provide an interface to consume arguments. 

Let's consider the `echo` command, you can past this content directly to Polyaxon UI or you can save it under `echo.yaml`:

```yaml
version: 1.1
kind: component
run:
  kind: job
  container:
    image: busybox:stable
    command: ["echo", "This is a test"]
```

This is a simple program that prints information. You can run it using Polyaxon CLI:

```bash
polyaxon run -f echo.yaml -l
```

In order to run this program with multiple values, we can keep changing the message manually or we can expose the message to print as an input and pass it as an argument:

```yaml
version: 1.1
kind: component
inputs:
- name: message
  type: str
run:
  kind: job
  container:
    image: busybox:stable
    command: ["echo", "{{ message }}"]
```

Now you can run multiple version of this example without changing the polyaxonfile:

```bash
polyaxon run -f echo.yaml -P message="test 1" -l
```

```bash
polyaxon run -f echo.yaml -P message="test 2" -l
```


One thing that you will notice is that Polyaxon will track the input and will show it in the UI and the CLI:

```bash
polyaxon ops get -uid UUID

Run inputs:

-------  ------
message  test 1
-------  ------

....
```

## Creating a custom program

Since most Polyaxon's users are data-scientists or machine learning engineers, they generally write their programs in Python, so the content of these tutorials will be in Python as well.

This is a simple application that prints your inputs, in this example we will use the `argparse` package to consume parameters, 
but the same logic can be used with [python-fire](https://github.com/google/python-fire), [click](https://github.com/pallets/click), or any other library of your choice.


```python
import argparse


if __name__ == '__main__':
    parser = argparse.ArgumentParser()

    parser.add_argument(
        '--message',
        type=str,
        default="Default message")
    
    args = parser.parse_args()
    
    print(args.message)
```

We can adjust our previous polyaxonfile to run this python program, in order to avoid [uploading code](/docs/intro/iterative-process/iterate-in-notebooks/) or [cloning a repo](/docs/intro/iterative-process/iterate-with-cli-git-code/), 
we will pass the python code [inline](/docs/intro/iterative-process/iterate-with-inline-scripts/):

Let's save this changes under `echo.yaml`:

```yaml
version: 1.1
kind: component
inputs:
- name: message
  type: str
run:
  kind: job
  init:
    - file:
        content: |
          import argparse

          if __name__ == '__main__':
              parser = argparse.ArgumentParser()
          
              parser.add_argument(
                  '--message',
                  type=str,
                  default="Default message")
              
              args = parser.parse_args()
              
              print(args.message)
              
        filename: echo.py
  container:
    image: polyaxon/polyaxon-quick-start
    workingDir: "{{ globals.artifacts_path }}"
    command: [python3, -u, echo.py]
    args: ["{{ params.message.as_arg }}"]
```

To run this example:

```bash
polyaxon run -f echo.yaml -P message="test 1" -l
```

## Explaining as_args

The new `echo.yaml` file is a bit more complex, and it introduced too many new concepts.

You can notice that we are passing the params with the `args` field, you can also notice that we used `{{ params.message.as_arg }}` which is the equivalent of `--message={{ message }}`.

> **Note**: For more information about params, please check the [specification section](/docs/core/specification/params/)

## Explaining init

For the purpose of this example, we provided our program as an init file, we could have created a directory with this structure:

```
- echo-example/
  - echo.yaml
  - echo.py 
```

Where the `echo.py` contains:

```python
import argparse

if __name__ == '__main__':
    parser = argparse.ArgumentParser()

    parser.add_argument(
        '--message',
        type=str,
        default="Default message")
    
    args = parser.parse_args()
    
    print(args.message)
```

And the `echo.yaml` contains:

```yaml
version: 1.1
kind: component
inputs:
- name: message
  type: str
run:
  kind: job
  container:
    image: polyaxon/polyaxon-quick-start
    workingDir: "{{ globals.run_artifacts_path }}/uploads"
    command: [python3, -u, echo.py]
    args: ["{{ params.message.as_arg }}"]
``` 

In that case we could have used the `--upload/-u` flag to upload the code necessary for running the component:
 
```bash
polyaxon run -u -f echo.yaml -P message="test 1" -l
```

> **Note**: You can learn more about how to iterate with upload, git, and inline scripts in the [iteration section](/docs/intro/iterative-process/iterate-in-notebooks/). 