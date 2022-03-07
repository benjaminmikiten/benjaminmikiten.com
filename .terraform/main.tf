terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = var.aws_region
}

resource "aws_instance" "app_server" {
	// ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-20211129
  ami           = "ami-0fb653ca2d3203ac1"
  instance_type = "t2.micro"

  tags = {
		Project = var.project_name
    Name = "${var.project_name}_app_server"
  }
}
