from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from .models import Message
from .serializers import MessageSerializer

def get_mock_answer(user: str) -> str:
   
    if user == "A":
        return "Obrigado pelo contato, Usuário A! Sua mensagem foi recebida e logo será respondida."
    elif user == "B":
        return "Olá Usuário B! Estamos processando sua solicitação e em breve você será respondido."
    return "Obrigado pelo contato!"


@method_decorator(csrf_exempt, name="dispatch")
class MessageListCreateView(APIView):

    def get(self, request):
        user = request.GET.get("user")
        queryset = Message.objects.all()

        if user in ["A", "B"]:
            queryset = queryset.filter(user=user)

        serializer = MessageSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        user = request.data.get("user")
        question = request.data.get("question")

        if user not in ["A", "B"]:
            return Response(
                {"detail": "Campo 'user' deve ser 'A' ou 'B'."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if not question:
            return Response(
                {"detail": "Campo 'question' é obrigatório."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        answer = get_mock_answer(user)

        message = Message.objects.create(
            user=user,
            question=question,
            answer=answer,
        )

        serializer = MessageSerializer(message)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
