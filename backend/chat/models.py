from django.db import models

class Message(models.Model):
    USER_CHOICES = (
        ("A", "Usuário A"),
        ("B", "Usuário B"),
    )

    user = models.CharField(max_length=1, choices=USER_CHOICES)
    question = models.TextField()
    answer = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]

    def __str__(self):
        return f"{self.get_user_display()} - {self.created_at:%Y-%m-%d %H:%M}"
