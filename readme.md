# Notes

## Creating a secret in Kubernetes

```shell
# kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
# kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=asdf
```

## Port-Forwarding with Kubectl

```shell
# kubectl port-forward [pod-name] 4222:4222
```
