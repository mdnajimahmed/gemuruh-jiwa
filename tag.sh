delete_tag() {
  TAG_NAME=$1
  if [ -z "$TAG_NAME" ]; then
    echo "Error: No tag name provided"
    exit 1
  fi
  git tag -d "$TAG_NAME"
  git push origin --delete "$TAG_NAME"
  echo "Tag '$TAG_NAME' deleted successfully."
}

create_tag() {
  TAG_NAME=$1
  if [ -z "$TAG_NAME" ]; then
    echo "Error: No tag name provided"
    exit 1
  fi
  git tag "$TAG_NAME"
  git push origin "$TAG_NAME"
  echo "Tag '$TAG_NAME' created and pushed successfully."
}


delete_and_recreate_tag() {
  TAG_NAME=$1
  if [ -z "$TAG_NAME" ]; then
    echo "Error: No tag name provided"
    exit 1
  fi

  delete_tag "$TAG_NAME"
  create_tag "$TAG_NAME"
}

# Main
if [ "$1" == "delete" ]; then
  delete_tag "$2"
elif [ "$1" == "create" ]; then
  create_tag "$2"
elif [ "$1" == "recreate" ]; then
  delete_and_recreate_tag "$2"
else
  echo "Usage: $0 {delete|create|recreate} <tag_name>"
  exit 1
fi